/*
	class name{
		public:
			name(){
			}
	}
	name s
*/
#include<iostream>
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
		void display(){
			cout<<"rollo no : "<<rollno<<endl;
			cout<<"Name : "<<name;
		}
};

int main()
{

	Student s1;
	s1.display();
//	s1.display();

	Student s2;
	s2.display();	
		
	return 0;
}
