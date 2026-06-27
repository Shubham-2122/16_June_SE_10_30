#include<stdio.h>
#include<conio.h>

void main()
{
	int a[5],i,j;
	int temp;
	
	for(i=0;i<5;i++){
		printf("Enter your Element : ");
		scanf("%d",&a[i]);
	}
	printf("\nStore Array data");
	
	for(i=0;i<5;i++){
		printf("\na[%d] : %d",i,a[i]);
	}
	
	for(i=0;i<5;i++){
		for(j=i+1;j<5;j++){
			if(a[i] > a[j]){
				temp = a[i];
				a[i] = a[j];
				a[j] = temp;
			}
		}
	}
	
	printf("\nasceding order");
	for(i=0;i<5;i++){
		printf("\na[%d] : %d",i,a[i]);
	}
	
	
	getch();
} 
