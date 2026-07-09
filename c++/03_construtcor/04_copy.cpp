#include<iostream>
#include<string.h>
using namespace std;

class Student{
	private:
		int rollno;
		char name[30];
	public:
//		1) defualt constroctor
		Student(){
			cout<<"\nEnter your rollno : ";
			cin>>rollno;
			cout<<"Enter your Name : ";
			cin>>name;
		}
//		2) parmater
		Student(int r,const char nm[30]){
			rollno = r;
			strcpy(name,nm);
		}
		
//		3) copy
		Student(Student &sh){
			rollno = sh.rollno;
			strcpy(name,sh.name);
		}
		void display(){
			cout<<"\nrollo no : "<<rollno<<endl;
			cout<<"Name : "<<name;
		}
};

int main()
{

//	defualt constro
	Student s1;
	s1.display();
	
//	parmter contro
	Student s2(2,"sujal");
	s2.display();
	
	
//	copy 

	Student s3(s1);
	s3.display();
	
		
	return 0;
}
