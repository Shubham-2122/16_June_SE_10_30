#include<stdio.h>
#include<conio.h>

int main()
{
	FILE *file;
//	char str[100];
	
	file = fopen("demo.txt","a");
	
//	null value chcek
	if(file ==NULL){
		printf("error null data..");
		return 1;
	}
	
	fputs("\nthis is append mode data new line",file);
	
	fclose(file);
	
	printf("file inside append successfully..");
	
	return 0;
}
